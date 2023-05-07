const setMessage = (father, msj) => {
  const pTag = document.createElement('p');
  pTag.className = 'helper';
  pTag.innerHTML = msj;
  father.appendChild(pTag);
}

const handleForm = (e) => {
  e.preventDefault();
  const helperText = document.querySelector('.helper');

  const name =  e.target.name.value;
  const email = e.target.email.value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;
  const nameSection = document.querySelector('.name-section');
  const emailSection = document.querySelector('.email-section');
  const subjectSection = document.querySelector('.subject-section');
  const textAreaSection = document.querySelector('.textArea-section');
  
  if( name.length < 3) {
    if (!helperText){
      setMessage(nameSection, 'El nombre debe tener un mínimo de 3 letras');
    }
  } else if (name.length > 50) {
    if (!helperText){
      setMessage(nameSection, 'El nombre es muy largo');
    }
  } else if (!email.endsWith('.com')) {
    if (!helperText){
      setMessage(emailSection, 'Solo admite email terminados en .com');
    }
  } else if (subject.length < 3) {
    if (!helperText){
      setMessage(subjectSection, 'El mensaje del motivo es muy corto');
    }
  } else if (subject.length > 20) {
    if (!helperText){
      setMessage(subjectSection, 'El mensaje del motivo debe ser más largo');
    }
  } else if (message.length > 180) {
    if (!helperText){
      setMessage(textAreaSection, 'El mensaje del área de texto debe ser de máximo 280 caracteres');
    }
  } 


}
document.querySelector('form').addEventListener("submit", handleForm);