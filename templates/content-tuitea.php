<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.29.6/js/jquery.tablesorter.min.js"></script>
<section id="tuitea-archive-titulo">
	<h1><?php the_title(); ?></h1>
	<h2><?php echo get_field("subtitulo");?></h2>
</section>
<section id="tweet">
	<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h1>¿Qué buscamos?</h1>
			<?php echo get_field("que");?>
			<h1>¿Por qué lo queremos?</h1>
			<?php echo get_field("porque");?>
			<h1>¿Cómo puedes ayudar?</h1>
			<?php echo get_field("cta");?>
			<br>
			<?php if(have_rows('hashtag')):
			   while(have_rows('hashtag')): the_row(); ?>
			   	<h3> <?php the_sub_field("hashtag-twitter");?> </h3>
			<?php endwhile; ?>
			<?php endif; ?>
<br><br>
<table id="myTable" class="tablesorter table-responsive-mobile"> 
<thead> 
<tr> 
    <th>Nombre</th> 
    <th>Apellido Paterno</th> 
    <th>Apellido Materno</th> 
    <th>Partido</th>
    <th>Entidad</th>
    <th>Twitter</th> 
</tr> 
</thead> 
<tbody> 
<?php if(have_rows('tuitea')):
   while(have_rows('tuitea')): the_row(); ?>
   <tr class="bordertop-gris"> 
   	<td> <?php the_sub_field("nombre");?> </td>
   	<td> <?php the_sub_field("apellido_paterno"); ?> </td>
   	<td> <?php the_sub_field("apellido_materno"); ?> </td>
   	<td> <img class="logo-partido" src="" alt='<?php the_sub_field("partido"); ?>'> </td>
   	<td> <?php the_sub_field("entidad"); ?> </td> 
   	<td> <a href="" target="blank" class="twitter-icon" data-handle='<?php the_sub_field("twitter"); ?>'> <i class="fab fa-twitter"></i> </a></td> 
   	</tr> 
<?php endwhile; ?>
<?php endif; ?>
</tbody> 
</table> 
</div>
</div>
</div>
</section>
<div id="tweet_text" style="display: none;"><?php echo get_field("tweet");?></div>


