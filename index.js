const setMessage = (father, msj) => {
  const pTag = document.createElement('p');
  pTag.className = 'helper';
  pTag.setHTML(msj);
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

  let validated = true
  const mailRegex = new RegExp(/^[a-z0-9._%+-]{1,64}@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/);

  if( name.length < 3) {
    validated = false;
    if (!helperText){
      setMessage(nameSection, 'El nombre debe tener un mínimo de 3 letras');
    }
  } else if (name.length > 50) {
    validated = false;
    if (!helperText){
      setMessage(nameSection, 'El nombre es muy largo');
    }
  }

  if (!email.match(mailRegex)) {
    validated = false;
    if (!helperText){
      setMessage(emailSection, 'Solo admite email terminados en .com');
    }
  }

  if (subject.length < 3) {
    validated = false;
    if (!helperText){
      setMessage(subjectSection, 'El mensaje del motivo es muy corto');
    }
  } else if (subject.length > 20) {
    validated = false;
    if (!helperText){
      setMessage(subjectSection, 'El mensaje del motivo debe ser más largo');
    }
  }
  
  if (message.length > 280) {
    validated = false;
    if (!helperText){
      setMessage(textAreaSection, 'El mensaje del área de texto debe ser de máximo 280 caracteres');
    }
  }
  if (validated) {
    e.target.submit();
  } else {

  }
}
document.querySelector('form').addEventListener("submit", handleForm);