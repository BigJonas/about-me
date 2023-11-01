import { Dialogs } from '@nativescript/core'

export function submitForm(args) {
  const page = args.object.page;

  let fName = page.getViewById('fName').text;
  let lName = page.getViewById('lName').text;
  let email = page.getViewById('email').text;
  let subject = page.getViewById('subject').text;
  let message = page.getViewById('message').text;

  if (fName == '' || lName == '' || email == '' || subject == '') {
    Dialogs.alert({
      title: 'Error',
      message: 'Please input all required fields.',
      okButtonText: 'OK',
      cancelable: true,
    })
    return;
  }

  if (message == '') {
    Dialogs.alert({
      title: 'Error',
      message: 'Please write a message.',
      okButtonText: 'OK',
      cancelable: true,
    })
    return;
  }

  Dialogs.alert({
    title: 'Success',
    message: 'Your message has been sent!!',
    okButtonText: 'OK',
    cancelable: true,
  })

}

export function goBack(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}
