class ValueError extends Error {
    constructor(message) {
        super(message)
    }
}

class FormatError extends Error {
    constructor(message) {
        super(message)
    }
}

class RequirementError extends Error {
    constructor(message) {
        super(message)
    }
}

class ConnectionError extends Error {
    constructor(message) {
        super(message)
    }
}

class TimeoutError extends Error {
    constructor(message) {
        super(message)
    }
}

class LogicError extends Error {
    constructor(message) {
        super(message)
    }
}

class CompareError extends Error {
    constructor(message) {
        super(message)
    }
}

class AuthError extends Error {
    constructor(message) {
        super(message)
    }
}

class DuplicateError extends Error {
    constructor(message) {
        super(message)
    }
}


export {
    LogicError,
    TimeoutError,
    ConnectionError,
    RequirementError,
    FormatError,
    ValueError,
    CompareError,
    AuthError,
    DuplicateError
} 