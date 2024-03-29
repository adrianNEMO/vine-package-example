import {
  updateUserValidator
} from 'common/apis/user'


const validated = await updateUserValidator({})

console.log({ validated })
