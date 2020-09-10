export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function normalize(path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash(path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal(path) {
  return outboundRE.test(path)
}

export function isMailto(path) {
  return /^mailto:/.test(path)
}

export function isTel(path) {
  return /^tel:/.test(path)
}

export function ensureExt(path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive(route, path) {
  const routeHash = decodeURIComponent(route.hash)
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage(pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath(relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems(page, regularPath, site, localePath) {
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
    const res = config
      ? config.map(item => resolveItem(item, pages, base))
      : []
    // console.log('sidebaritems: ', res)
    return res
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders(page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders(headers) {
  // console.log('headers: ', headers)
  // group headers
  // h2 > h3 > h4 > h5 > h6
  headers = headers.map(h => Object.assign({}, h))
  let H = []
  let idx
  headers.forEach(h => {
    if (!H.length) {
      H.push(h)
      return
    }

    idx = H.length - 1
    if (h.level > H[idx].level) {
      (H[idx].children || (H[idx].children = [])).push(h)
      H.push(h)
      return
    }
    if (h.level < H[idx].level) {
      const times = H[idx].level - h.level
      for (var i = 0; i < times; ++i) {
        H.pop()
        if (idx > 0) --idx
      }
    }
    if (H[idx - 1]) {
      (H[idx - 1].children || (H[idx - 1].children = [])).push(h)
    }
    H[idx] = h
  })
  const ret = headers.filter(h => h.level === 2)
  // console.log('groupHeaders: ', ret)
  return ret
}

export function resolveNavLinkItem(linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export function resolveMatchingConfig(regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash(path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem(item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    const children = item.children || []
    let page = {}
    // if (item.path) {
    //   page = Object.assign(resolvePage(pages, item.path, base), {
    //     title: item.title
    //   })
    // }

    // NOTE: temporarily removed
    
    // if (children.length === 0 && item.path) {
    //   page = Object.assign(resolvePage(pages, item.path, base), {
    //     title: item.title
    //   })
    //   // console.log('page: ', page)
    //   return page
    // }

    // if (item.nested && item.path && children.length){
    //   page = Object.assign(resolvePage(pages, item.path, base), {
    //     title: item.title
    //   })
    //   children.map(child => {
    //     page.headers = [
    //       ...page.headers,
    //       ...resolvePage(pages, child, base).headers
    //     ]
    //   })
    //   console.log('nested page: ', page)
    //   return page
    // }
    let sub = null
    if (item.path) {
      sub = resolvePage(pages, item.path, base)
      sub.nested = item.nested
      sub.download = item.download
      sub.sidebarDepth = item.sidebarDepth
    }

    page = {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      children: children.map(child => {
        const resolved = resolveItem(child, pages, base, groupDepth + 1)
        // if (sub && resolved.type === "page") {
        //   sub.headers = [
        //     ...sub.headers,
        //     ...resolved.headers
        //   ]
        // }

        return resolved
      }),
      collapsable: item.collapsable !== false
    }
    page = {
      ...sub,
      ...page
    }
    // console.log('group: ', page)
    return page
  }
}
