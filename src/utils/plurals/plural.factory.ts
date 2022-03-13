import plural from 'plural-ru'

type ThreeForms = [string, string, string];
type TwoForms = [string, string];

export type PluralFunctionOptions = {
  withNumber?: boolean
}
export type PluralFunction = (num: number, options?: PluralFunctionOptions) => string
type PluralFactory = (...forms: TwoForms | ThreeForms) => PluralFunction

const pluralFactory: PluralFactory = (...forms) => {
  return (num, options = { withNumber: true }) => {
    const { withNumber } = options

    const pluralized = plural(num, ...forms)

    return withNumber
      ? `${num} ${pluralized}`
      : pluralized
  }
}

export default pluralFactory
