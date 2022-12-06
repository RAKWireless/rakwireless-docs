---
sidebar: false
rak_img: /assets/images/knowledge-hub/user-manual/magma-box/overview/magma-box.png
rak_desc: This guide provides a step-by-step tutorial on Dockerized Magma AGW 1.8.0 Configuration.
tags:
  - User Manual
  - Magma Box
  - Docker
  - Installation Guide
header:
  title: Magma Orchestrator & NMS
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 11/01/2023 8:00 PM
next: ../Magma-Orchestrator-and-NMS/Dockerized-Magma-AGW-Installation-Guide/
---

# Magma Orchestrator & NMS

## Content

- [Magma Orchestrator \& NMS](#magma-orchestrator--nms)
  - [Content](#content)
  - [Prerequisite](#prerequisite)
  - [Environment Setup](#environment-setup)
  - [Build Orchestrator \& NMS](#build-orchestrator--nms)
  - [Run Orchestrator \& NMS](#run-orchestrator--nms)
  - [Add Host Record on Your OM PC](#add-host-record-on-your-om-pc)

## Prerequisite

- **Hardware**: x68_64 PC
- **OS**: Ubuntu 22.04 server

## Environment Setup

1. Install the docker.

```
sudo apt update && sudo apt install -y docker.io

sudo curl -SL https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# Add docker to sudo group
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo service docker restart
```

2. Download the magma source code.

```
git clone https://github.com/magma/magma.git
cd magma
git checkout v1.8.0-rc1
```


## Build Orchestrator & NMS

```shell
export MAGMA_ROOT=${PWD}
```

```shell
cd ${MAGMA_ROOT}/orc8r/cloud/docker
./build.py --all
```

```shell

cd ${MAGMA_ROOT}/nms
docker-compose build
```

## Run Orchestrator & NMS

```shell
# Run Orchestrator
cd ${MAGMA_ROOT}/orc8r/cloud/docker
./run.py --metrics

# Run NMs
cd ${MAGMA_ROOT}/nms/
docker-compose up -d

# Create default organization & admin account
./scripts/dev_setup.sh
```


## Add Host Record on Your OM PC

```
<PC_IPAddress>  magma-test.localhost
```

1. Log in using the following credentials:

      - **URL**: https://magma-test.localhost
      - **Username**: admin@magma.test
      - **Password**: password1234


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/magma-orchestrator/1.login-credentials.png" width="100%">
</p>



<br>

2. Create a network.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/magma-orchestrator/2.add-network.png" width="100%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/magma-orchestrator/3.select-network.png" width="100%">
</p>





<br>

3. Create Access Gateway.


- Get `rootCA.pem` from the magma server.

```
cat ${MAGMA_ROOT}/.cache/test_certs/rootCA.pem
```

```
-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIUBW6xfiqamgwsci+GBx8BBsIOEUgwDQYJKoZIhvcNAQEL
BQAwKTELMAkGA1UEBhMCVVMxGjAYBgNVBAMMEXJvb3RjYS5tYWdtYS50ZXN0MCAX
DTIyMTAxMTA2MjEzNFoYDzMwMjIwMjExMDYyMTM0WjApMQswCQYDVQQGEwJVUzEa
MBgGA1UEAwwRcm9vdGNhLm1hZ21hLnRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQDYGFIFOVxbNHY57RG+3ggK5EoMFpEfDAmeSWN16BEfWx0ylGBa
szH6h1viSMSkaOWRpty/xrtzpI7WYaIf6nqAvQ516a1Gg2J5sV6BfqiqgzmgLlaw
g0WaqjCE4PfUgS9ua1mllLcqQXZxegIk7evgdQtnpzJZL3NG0WRNdYvQx1W7QpCf
Q1GJu1/8nViKDU+kWXp1+sihn7d8zBF7lDTWBF45slYD2CWxt/6BnLYzSCarUqxL
gl4XkTu0zsVDl0ePwCGOjiPI59nFDlmZpqu3/GX4S3NnnCb0NvsvZWNmZjLvNuUj
eaN6GS+OsJ9yMOC9i3gg7mZEzf2uoT653adJAgMBAAGjUzBRMB0GA1UdDgQWBBSM
F+lu40xk2KoZN2HdungLYfR92zAfBgNVHSMEGDAWgBSMF+lu40xk2KoZN2HdungL
YfR92zAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCk2e6bvXMQ
t1NfVQa/GnaJnH6Og1dzNGHTILTMYGIuAY1RS240jZtV0gU63tpkAEMbsqm6sVwH
0xTy0r7ihkHl2ndbakyKbgH/UF7qbp+tOvq8q6FlcMyDX/x9vZHAK86yOhxgzcjo
PtI0U3SNTB3WMtP3FsMjOiU1ouZV63YiJljpYet0tUGB4L3cJRwDfp4mOykhwGz/
k/Z56pAnW9EiLtcriZm4Icpmf4f6KZ4JJu1H9O4ho5bNU+mGXsRJgKuxskw+MMKU
YDSttPPIcpyMjzfsZHhSoEizFXX8RcRXSNcE38QlwbZKPXqoUQX0/686DJszOc9V
12Tqonmf3R0G
-----END CERTIFICATE-----
```

<br>

- Copy `rootCA.pem` to access the gateway.

```
ssh ubuntu@<agw.ipaddress>

cat > /var/opt/magma/certs/rootCA.pem <<EOF
-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIUBW6xfiqamgwsci+GBx8BBsIOEUgwDQYJKoZIhvcNAQEL
BQAwKTELMAkGA1UEBhMCVVMxGjAYBgNVBAMMEXJvb3RjYS5tYWdtYS50ZXN0MCAX
DTIyMTAxMTA2MjEzNFoYDzMwMjIwMjExMDYyMTM0WjApMQswCQYDVQQGEwJVUzEa
MBgGA1UEAwwRcm9vdGNhLm1hZ21hLnRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQDYGFIFOVxbNHY57RG+3ggK5EoMFpEfDAmeSWN16BEfWx0ylGBa
szH6h1viSMSkaOWRpty/xrtzpI7WYaIf6nqAvQ516a1Gg2J5sV6BfqiqgzmgLlaw
g0WaqjCE4PfUgS9ua1mllLcqQXZxegIk7evgdQtnpzJZL3NG0WRNdYvQx1W7QpCf
Q1GJu1/8nViKDU+kWXp1+sihn7d8zBF7lDTWBF45slYD2CWxt/6BnLYzSCarUqxL
gl4XkTu0zsVDl0ePwCGOjiPI59nFDlmZpqu3/GX4S3NnnCb0NvsvZWNmZjLvNuUj
eaN6GS+OsJ9yMOC9i3gg7mZEzf2uoT653adJAgMBAAGjUzBRMB0GA1UdDgQWBBSM
F+lu40xk2KoZN2HdungLYfR92zAfBgNVHSMEGDAWgBSMF+lu40xk2KoZN2HdungL
YfR92zAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCk2e6bvXMQ
t1NfVQa/GnaJnH6Og1dzNGHTILTMYGIuAY1RS240jZtV0gU63tpkAEMbsqm6sVwH
0xTy0r7ihkHl2ndbakyKbgH/UF7qbp+tOvq8q6FlcMyDX/x9vZHAK86yOhxgzcjo
PtI0U3SNTB3WMtP3FsMjOiU1ouZV63YiJljpYet0tUGB4L3cJRwDfp4mOykhwGz/
k/Z56pAnW9EiLtcriZm4Icpmf4f6KZ4JJu1H9O4ho5bNU+mGXsRJgKuxskw+MMKU
YDSttPPIcpyMjzfsZHhSoEizFXX8RcRXSNcE38QlwbZKPXqoUQX0/686DJszOc9V
12Tqonmf3R0G
-----END CERTIFICATE-----
EOF
```

<br>

- Add host records to `/etc/hosts` of the AGW.

```
# append these lines to /etc/hosts file of AGW
<PC_IPAddress> controller.magma.test
<PC_IPAddress> bootstrapper-controller.magma.test
<PC_IPAddress> fluentd.magma.test
```

<br>

- Get the hardware ID & challenge key from Access Gateway.

```
# Login to access gateway via ssh
ssh ubuntu@<agw.ipaddress>

cd /var/opt/magma/docker

sudo docker-compose exec magmad show_gateway_info.py
```



 ```
 Hardware ID
 -----------
 01235b62-6d55-ec47-ee10-00000074****

 Challenge key
 -------------
 MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQ********************************IH6l8fYxpEJ5xCWk3trokmOWDupEmvQ8tKoqdtg3lvmGyMzhUHwg==

 Build info
 -------------
  Commit Branch: unknown
  Commit Tag: unknown
  Commit Hash: unknown
  Commit Date: unknown

 Notes
 -----
 - Hardware ID is this gateway's unique identifier
 - Challenge key is this gateway's long-term keypair used for
   bootstrapping a secure connection to the cloud
 - Build info shows git commit information of this build
 ```

<br>


:::tip 📝 NOTE

- **Hardware ID**: `01235b62-6d55-ec47-ee10-00000074****`
- **Challenge key**: `MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQ********************************IH6l8fYxpEJ5xCWk3trokmOWDupEmvQ8tKoqdtg3lvmGyMzhUHwg==`
:::

<br>

- Create access gateway in NMS.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/magma-orchestrator/4.add-new-gateway.png" width="100%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/magma-orchestrator/5.access-gateway.png" width="100%">
</p>

<br>

- Restart the access gateway

```ssh

ssh ubuntu@<agw.ipaddress>
cd /var/opt/magma/docker
sudo docker-compose restart
```