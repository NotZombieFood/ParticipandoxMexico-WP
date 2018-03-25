<?php
/**
 * Template Name: nosotros
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'nosotros'); ?>
<?php endwhile; ?>
