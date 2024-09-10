import { atom } from 'recoil';

export const updateOnramp = atom<boolean>({
    key: 'updateTrans',
    default: false
})