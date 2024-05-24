type Profile = Readonly<{
    balance: number,
    createdAt: Date,
    email: String,
    firstName: String,
    id: number,
    lastName: String,
    updatedAt: Date, 
}>;

export default Profile;
