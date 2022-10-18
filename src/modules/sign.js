import {avatarController} from "./avatarController";
import {postData} from "./postData";

export const signInController = () => {

};

export const signUpController = () => {
  const form = document.querySelector('.form-sign-up');

  const crp = avatarController({
    inputFile: '.avatar__input',
    uploadResult: '.avatar__result',
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (form.password[0].value !== form.password[1].value) {
      console.log('passwords are wrong');
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.avatar = await crp.result({
      type: 'base64',
      size: 'viewport'
    })

    const dataResponse = await postData('${API_URL}/api/service/signup', data);

    if (dataResponse.errors) {
      console.log('dataresponse are wrong');
      return;
    }

    const servicesList = document.querySelector('.services__list');
    servicesList.append(createCard(dataResponse));
  })

};


