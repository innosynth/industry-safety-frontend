
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Shield className="h-6 w-6 text-primary mr-2" />
        <span className="text-xl font-bold">InnoSynth</span>
      </div>
      <div className="space-x-4 hidden sm:flex">
        <Button variant="outline" asChild>
          <Link to="/pricing">Pricing</Link>
        </Button>
        <Button onClick={() => navigate("/landing")}>Log In</Button>
      </div>
      <Button className="sm:hidden" variant="outline" size="icon" asChild>
        <Link to="/pricing">
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </header>
  );
};

export default Header;
