<section id="perfil">
    <br><br>
        <div class="container" id="informacion">
            <div class="row">
                <div class="col-md-3"> <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>"> </div>
                <div class="col-md-9">
                    <h2><?php the_title(); ?></h2>
                    <p><b>Partido:</b> <?php echo get_field("partido");?></p>
                    <p><b>Edad:</b> <?php echo get_field("edad");?></p>
                    <p><b>Nacimiento:</b> <?php echo get_field("nacimiento");?></p>
                    <p><b>Estudios:</b> <?php echo get_field("estudios");?></p>
                    <p><b>Estado Civil:</b> <?php echo get_field("estado-civil");?></p>
                    <p><b>Redes sociales:</b> <?php echo get_field("redes");?></p>
                </div>
            </div>
            <br>    
            <div class="row">
                <div class="col-md-12">
                    <h2>Propuestas</h2>
                </div>
                 <div class="col-md-12 center">
                    <button class="boton-candidato" id="economia">Economía</button>
                    <button class="boton-candidato" id="educacion">Educación</button>
                    <button class="boton-candidato" id="internacional">Internacional</button>
                    <button class="boton-candidato" id="salud">Salud</button>
                    <button class="boton-candidato" id="seguridad">Seguridad</button>
                    <button class="boton-candidato" id="ecologia">Ecología</button>
                </div>
                <div id="propuestas" class="col-md-12">
                    
                </div>
            </div>
        </div>
 </section>
<div style="display: none;">
<?php if(have_rows('propuestas_rep')):
   while(have_rows('propuestas_rep')): the_row(); ?>
    <div class="objetos" data-propuesta="<?php the_sub_field("propuesta_texto");?>" data-categoria="<?php the_sub_field("propuesta_categoria"); ?>"> </div>
<?php endwhile; ?>
<?php endif; ?>
</div>