import { IngressoContext } from 'common/context/Ingresso';
import Banner from 'components/Banner'
import Menu from 'components/Menu'
import React, { useContext } from 'react'

const Ingresso = () => {

  const {  formData  } = useContext(IngressoContext);

  console.log(formData)
  
  return (
    <>
    
        <Menu />
        <Banner imagem="ingresso2" titulo="Seu ingresso está aqui!" />

    
    </>
  )
}

export default Ingresso