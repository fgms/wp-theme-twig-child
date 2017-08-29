# FGMS Wordpress Theme Twig Child

## Requires
* [wp-theme-twig](https://github.com/fgms/wp-theme-twig)
* [wp-less]

## Template Check Order

*defined in wp-theme-twig functions.php will setup the order to search for a template.
As twig goes through all the directories it will keep overwriting the template if it finds it further down.*

**Example**
* single-special.twig file is found in wp-theme-twig /twig-templates/wp directory
* it is also found in a plugin wp-plugin-cpt /twig-templates/ directory.
* it is also found in a plugin wp-plugin-vip /twig-templates/ directory.
* it is also found in wp-theme-twig-child /twig-templates/plugin/ directory.

*The file that gets used is the one that is in the child theme /twig-templates/plugin/ directory because it is the last on the list.
If it was not there then it would find it in the wp-plugin-vip /twig-templates/ directory.
If it was not in the wp-plugin-vip it would be found in the wp-plugin-cpt /twig-templates/ directory.*


* wp-theme-twig
  * /twig-templates/wp/
  * /twig-templates/partials/
  * /twig-templates/email/
  * /twig-templates/form  
* wp-theme-twig-child
  * /twig-templates/wp/
  * /twig-templates/partials/
  * /twig-templates/email/
  * /twig-templates/form
* (any plugins) -- depending on which plugin gets loaded first this could be unpredictable
  * /twig-tempaltes
* wp-theme-twig-child
  * /twig-tempates/plugin
