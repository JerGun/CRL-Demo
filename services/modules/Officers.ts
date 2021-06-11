import { Iofficer } from '~/types/officers'
import BaseService from './Base'

export default class OfficersService extends BaseService {
  
  static getAllOfficers() {
    return this._get('https://maesuaihospital.herokuapp.com/officers')
  }

  static addOfficer(newOfficer: Partial<Iofficer>): Promise<Iofficer> {
    return this._post(
      'https://maesuaihospital.herokuapp.com/officer',
      newOfficer,
    ).then((res) => {
      return res
    })
  }
}
