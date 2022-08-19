import {legacy_createStore} from 'redux'
import { Reducer } from './Reducer'

export let store = legacy_createStore(Reducer) 