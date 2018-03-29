<section id="hero">
 	<div class="center w750">
		<img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo.png" class="logo_hero" alt="">
		<h1>Buscamos que todos puedan <span id="cta_hero">ayudar</span></h1>	
	</div>
</section>
<section id="intro_home">
	<div class="container">
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8 center">
				<h1><?php echo get_field("textosomostitulo");?></h1>
				<h2><?php echo get_field("textosomosparrafo");?></h2>
			</div>
		</div>
	</div>
</section>
<section id="descanso_home"></section>
<section id="proyectos_home">
	<div class="container">
		<div class="row">
			<?php if(have_rows('proyectos')):
			   while(have_rows('proyectos')): the_row(); ?>
			<div class="col-md-6">
				<div class="proyectos center">
					<h1><?php the_sub_field("proyectotitulo");?></h1>
					<p><?php the_sub_field("proyectodesc");?></p>
					<br>
					<a class="btn_proyectos" href="<?php echo get_site_url(); ?><?php the_sub_field("proyectourl");?>">Conoce más</a>
				</div>
			</div>
			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</section>
<section id="cta_home" class="center">
	<h1><?php echo get_field("textoctatitulo");?></h1>
	<h2><?php echo get_field("textoctaparrafo");?></h2>
	<br><br>
	<a href="<?php echo get_site_url(); ?>/contacto">Contacto</a>
</section>
<div style="display: none;">
<?php if(have_rows('palabras')):
   while(have_rows('palabras')): the_row(); ?>
   	<div class="palabras" data-texto="<?php the_sub_field("palabra_texto");?>"> </div>
<?php endwhile; ?>
<?php endif; ?>
</div>