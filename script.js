const avanca = document.querySelectorAll('.btn-proximo');
avanca,ForEach(button => {
  button.addEventlistener("click' , function(){
         const atual= document.querySelecton(' .ativo');
  const proximoPasso = 'passo' + this.getAttribute('data-proximo');

               atual.classlist.remove('ativo');
  document.getElementByld(proximoPasso).classlist.add('ativo');
})
})
