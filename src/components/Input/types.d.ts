type InputProps = {
    name?: string,
    labelName: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    autofocus?: boolean | undefined
}