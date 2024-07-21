import Link from "next/link";

import RoutesPaths from "@/_types/enums/routes";

const NotFound = () => {
  return (
    <div>
      Not found sorry
      <Link href={RoutesPaths.home}>HOME PAGE</Link>
    </div>
  );
};

export default NotFound;
