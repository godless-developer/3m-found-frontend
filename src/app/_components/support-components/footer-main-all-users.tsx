interface User {
  department?: string;
}

interface FooterMainAllUsersProps {
  filteredUsers: User[];
  firstEmployment: string | null;
  lastEmployment: string | null;
}

export function FooterMainAllUsers({
  filteredUsers,
  firstEmployment,
  lastEmployment,
}: FooterMainAllUsersProps) {
  return (
    <div className="w-full grid grid-cols-5 text-sm font-medium p-3 bg-white/5 rounded-lg">
      <div>Нийт ажилчид: {filteredUsers.length}</div>
      <div>
        {firstEmployment && lastEmployment
          ? `${firstEmployment} - ${lastEmployment}`
          : ""}
      </div>
      <div>{filteredUsers[0]?.department} салбарын ажилчид: </div>
      <div>{filteredUsers[6]?.department} салбарын ажилчид: </div>
      <div>{filteredUsers[7]?.department} салбарын ажилчид: </div>
    </div>
  );
}
