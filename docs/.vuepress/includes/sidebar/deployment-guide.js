
module.exports = {
  '/knowledge-hub/Learn/Resources/deployment-guide/': [
    {
      title: "← Back to Deployment Guides",
      nested: true,
      collapsable: false,
      path: '/knowledge-hub/Learn/Resources/deployment-guide/',
      children: [

      ]
    },
    {
      title: 'Build-in LoRa Network Server Configuration',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: "Getting Started",
          nested: false,
          collapsable: false,
          path: '/knowledge-hub/Learn/Resources/deployment-guide/build-in-lora-server/',
          children: [
            'build-in-lora-server/built-in-lora-network-server',
            'build-in-lora-server/rak-lpwan-node'
          ]
        },
      ]
    },{
      title: 'Multi-RAK Gateway Mesh',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: "Getting Started",
          nested: false,
          collapsable: false,
          path: '/knowledge-hub/Learn/Resources/deployment-guide/multi-rak-gateway-mesh/',
          children: [
            'multi-rak-gateway-mesh/gateway-a-built-in-ns',
            'multi-rak-gateway-mesh/gateway-b-mqtt-bridge',
            'multi-rak-gateway-mesh/setup-external-mqtt-broker',
            'multi-rak-gateway-mesh/rak-lpwan-node',
            'multi-rak-gateway-mesh/traffic-testing-and-monitoring'
          ]
        },
      ]
    },
    {
      title: 'Amazon Web Service',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: "Getting Started",
          nested: false,
          collapsable: false,
          path: '/knowledge-hub/Learn/Resources/deployment-guide/amazon-web-service/',
          children: [
            'amazon-web-service/aws-install-chirpstack',
            'amazon-web-service/install-the-gateway-bridge',
            'amazon-web-service/configure-aws-security', 
            'amazon-web-service/configure-your-gateway'
          ]
        },
      ]
    },
    {
      title: 'Gateway Remote Management - DDNS',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: "Getting Started",
          nested: false,
          collapsable: false,
          path: '/knowledge-hub/Learn/Resources/deployment-guide/gateway-remote-management-ddns/',
          children: [
            'gateway-remote-management-ddns/register-ddns-service',
            'gateway-remote-management-ddns/setup-ddns-in-gateway'
          ]
        }
      ]
    },
    {
      title: 'Gateway Remote Management - OpenVPN',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        {
          title: "Getting Started",
          nested: false,
          collapsable: false,
          path: '/knowledge-hub/Learn/Resources/deployment-guide/gateway-remote-management-openvpn/',
          children: [
            'gateway-remote-management-openvpn/openvpn-server-deployment',
            'gateway-remote-management-openvpn/openvpn-management-client-setup',
            'gateway-remote-management-openvpn/openvpn-client-setup-on-lora-gateway',

          ]
        }
      ]
    }
  ]
}