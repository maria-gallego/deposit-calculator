import {validatedInterest} from "../interest-calculator";
import {ValidationError} from "../error-handling";

describe('error handling for input values', () => {
    it('tests validatedInterest with a valid input', () => {
        expect(validatedInterest(1.1)).toBeCloseTo(0.011, 3)
    })

    it('tests validatedInterest error message', () => {
        expect(() => {
            validatedInterest(0)
        }).toThrowError(new ValidationError("Interest must be entered as a percentage greater than 0, like 1.5"))
    })
})