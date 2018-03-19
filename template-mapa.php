<?php
/**
 * Template Name: Mapa
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'mapa'); ?>
<?php endwhile; ?>
