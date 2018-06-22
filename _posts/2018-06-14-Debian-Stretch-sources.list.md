---

layout: post title: Debian Stretch sources.list category: debian tags: linux, debian published : true

excerpt_separator: <!--more-->
------------------------------

<table style="width:100%"> <tr> <td width="64"><img src="{{ site.url }}/images/logos/debian.png"></td> <td> La liste des dépots Debian Stretch à copier dans /etc/apt/sources.list </td> </tr></table><!--more-->

```
## main
deb http://ftp.fr.debian.org/debian/ stretch main contrib non-free
deb http://ftp.fr.debian.org/debian/ stretch-updates main contrib non-free
deb http://ftp.fr.debian.org/debian/ stretch-proposed-updates main contrib non-free
## backports
deb http://ftp.fr.debian.org/debian/ stretch-backports main contrib non-free
## security
deb http://security.debian.org/ stretch/updates main contrib non-free
```
