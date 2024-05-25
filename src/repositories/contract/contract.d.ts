type Contract = Readonly<{
    ClientId: number,
    ContractorId: number,
    createdAt: Date,
    id: number,
    status: ['new', 'in_progress', 'terminated'],
    updatedAt: Date, 
}>;

export default Contract;
