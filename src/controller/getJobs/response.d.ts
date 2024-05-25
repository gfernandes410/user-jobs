type Response = Readonly<{
    jobId: number,
    description: String,
    price: number,
    paid: boolean,
    ContractId: number,
    ClientId: number,
    ContractorId: number,
}>;

export default Response;
