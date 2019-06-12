'use strict'

import { ValueError, FormatError, RequirementError, CompareError } from './errors'

const validate = {
    arguments(args) {
        args.forEach(({ name, value, type, notEmpty, optional }) => {
            if (value != undefined) {
                if (type === 'object') if (value.constructor !== Object) throw TypeError(`${name} is not an object`)
                if (typeof value !== type) throw TypeError(`${name} ${value} is not a ${type}`)

                if (notEmpty) if (type === 'string') if (!value.trim().length) throw new ValueError(`${name} is empty`)
            } else if (!optional) throw new RequirementError(`${name} is not optional`)
        })
    },

    email(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(email))) throw new FormatError(`${email} is not an e-mail`)
    },

    url(url) {
        const re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

        if (!re.test(String(url))) throw new FormatError(`${url} is not a url`)
    },

    compare(a, b) {
        if (a.type !== b.type) throw TypeError(`${a.name} and ${b.name} should have the same type to compare`)

        switch (a.type) {
            case 'string':
                if (a.value.trim() !== b.value.trim()) throw new CompareError(`${a.name} and ${b.name} are differents`)
                break
            default:
                throw Error(`we can not compare ${a.type} yet!`)
        }

    }
}

export default validate 