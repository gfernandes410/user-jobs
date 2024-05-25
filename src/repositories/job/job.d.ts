type Job = Readonly<{
    ContractId: number, 
    createdAt: Date,
    description: String,
    id: number,
    paid: boolean,
    paymentDate: Date,
    price: number,
    updatedAt: Date, 
}>;

export default Job;
