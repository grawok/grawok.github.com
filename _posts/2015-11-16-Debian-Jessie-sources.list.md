---
layout: post
title: Debian Jessie sources.list
category: debian
tags: linux, debian
published : true
excerpt_separator: <!--more-->
---
<table style="width:100%">
  <tr>
    <td width="64"><img src="{{ site.url }}/images/logos/debian.png"></td>
    <td>
    La liste des dépots Debian Jessie à copier dans /etc/apt/sources.list
    </td>
  </tr>
</table> 
<!--more-->

```bash
deb http://ftp.fr.debian.org/debian/ jessie main non-free contrib
deb http://security.debian.org/ jessie/updates main contrib non-free
deb http://ftp.fr.debian.org/debian/ jessie-proposed-updates main contrib non-free
deb http://www.deb-multimedia.org jessie main non-free
```
*Note* : pour le miroir deb-multimedia, il est nécessaire d’installer le keyring du dépôt :

```
# apt-get install deb-multimedia-keyring
```
