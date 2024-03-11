$(function(){
  // show apply form modal
  $(document).on('click', '#selfApply', function() {
    $('.influencer-modal').show();
  })

  // toggle sidebar apply
  $(document).on('scroll', function() {
    const offsetHeight = $('.influencer-coperation-introduce .influencer-href').offset().top;
    const scrollHeight = $(document).scrollTop();
    if (offsetHeight <= scrollHeight) {
      $('.influencer-sidebar-apply').show()
    } else {
      $('.influencer-sidebar-apply').hide()
    }
  })
})