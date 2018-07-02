Magento 2.0 Sample Theme
====================
Customisation Theme Magento 2 Based in  Blank

What I have done:
----------
+ No Js add via XML
+ Styles with BEM Naming Convention
+ Manager Layouts : 1 col , 2... 3 4
+ Bootstrap 3.3.7 sources lib added in


The purpose
----------
Build theme from scratch for front-end devs<br/>
Fast build theme and save your time 


Install
-----

Manually:

Via github

go to magento2_root/app/desgin<br/>
creat frontend directory<br/>
create child directory follow
Your_Vendor/YourTheme<br/>
ex: YourCompany/theme

git clone git@github.com:mrtuvn/Magento2SampleTheme.git

change registration.php and theme.xml coressponding to your theme

![Magento 2 Sample Theme Advise](http://i.imgur.com/8AniUBy.png)


Usage
-----
Apply changes 
From root magento

rm -rf var/* pub/static/frontend/*<br/>
php bin/magento setup:static-content:deploy -vvv


