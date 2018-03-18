<?php
/**
 * Template Name: Tuitea
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'tuitea'); ?>
<?php endwhile; ?>
