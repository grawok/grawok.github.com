---
layout: post
title: Ubuntu whoopsie et la détection de problème matériel
category: ubuntu
tags: linux, template
published : false
excerpt_separator: <!--more-->
---
<table style="width:100%">
  <tr>
    <td width="64"><img src="{{ site.url }}/images/logos/default.png"></td>
    <td>
    
    </td>
  </tr>
</table> 
<!--more-->

* purge du crash report

```
 cd /var/crash
 ls -l
```
* activer/desactiver la foncion de rapport whoopsie

```
 sudo gedit /etc/default/apport
```
 et passer enabled à 0

```
 enabled=0
```
* dossiers groupe whoopsie dans /var/log
```
drwxrwsrwt  2 root whoopsie 4096 déc.   2 11:02 crash
drwxrwsrwt  2 root whoopsie 4096 févr. 14  2014 metrics
```
* désinstaller whoopsie?

```
apt-get remove whoopsie whoopsie-preferences
```
