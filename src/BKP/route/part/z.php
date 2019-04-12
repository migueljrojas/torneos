<footer class="footer">
  <div class="footer__top">
    <div class="footer__overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-24 col-sm-8 col-md-8 footer__contact">
          <div class="icon wow fadeInUp"><i class="fa fa-map-marker"></i></div>
          <p class="wow fadeInUp">Balcarce 510, CABA, Argentina</p>
          <p class="wow fadeInUp">+54 (11) 5235 4800</p>
          <p class="wow fadeInUp"><a href="mailto:info@torneos.com" taget="_blank">info@torneos.com</a></p>
        </div>
        <div class="hidden-xs col-sm-8 col-md-8 footer__menu">
          <ul>
            <li class="wow fadeInRightBig"><a href="<?php echo path('/') ?>"><?php echo $intl->t('lay_nav_home') ?></a></li>
            <li data-wow-delay="0.25s" class="wow fadeInRightBig"><a href="<?php echo path('/produccion') ?>"><?php echo $intl->t('lay_nav_prd') ?></a></li>
            <li data-wow-delay="0.375s" class="wow fadeInRightBig"><a href="<?php echo path('/derechos') ?>"><?php echo $intl->t('lay_nav_rights') ?></a></li>
            <li data-wow-delay="0.5s" class="wow fadeInRightBig"><a href="<?php echo path('/eventos') ?>"><?php echo $intl->t('lay_nav_evts') ?></a></li>
            <li data-wow-delay="0.625s" class="wow fadeInRightBig"><a href="<?php echo path('/licencias-y-patrocinio') ?>"><?php echo $intl->t('lay_nav_license') ?></a></li>
         </ul>
        </div>
        <div class="hidden-xs col-sm-8 col-md-8 footer__menu">
          <ul>
            <li data-wow-delay="0.125s" class="wow fadeInRightBig"><a href="<?php echo path('/quienes-somos') ?>"><?php echo $intl->t('lay_nav_us') ?></a></li>
            <li><a href="<?php echo path('/sustentabilidad') ?>"><?php echo $intl->t('lay_nav_rse') ?></a></li>
            <li data-wow-delay="0.75s" class="wow fadeInRightBig"><a href="<?php echo path('/recursos-humanos') ?>"><?php echo $intl->t('lay_nav_hr') ?></a></li>
         </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container">
      <div class="row">
        <div class="col-xs-24 footer__copyright">
          <div class="footer__logo"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoOriginal"></use></svg></div>
          <p>TORNEOS Y COMPETENCIAS S.A. <?php echo $intl->t('lay_foo_copy') ?> - COPYRIGHT. USE OF THIS WEBSITE ASSUMES ACCEPTANCE OF TERMS OF USE AND PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__credits">
    <div class="container">
      <div class="row">
        <div class="col-xs-24"><a href="http://www.creatos.com" target="_blank"><?php echo $intl->t('lay_foo_by') ?><img src="<?php echo path('/asset/img/creatos.png') ?>"></a></div>
      </div>
    </div>
  </div>
</footer>
<script src="<?php echo path('/asset/js/main.js') ?>"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"></script>
<script>new WOW().init();</script>
</body></html>
