import React from "react";

// Must include Router, though not used, the code will not render otherwise
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import WriteReview from "../Pages/WriteReview";
import Doctors from "../Pages/Doctors";
import SingleDoctor from '../Pages/SingleDoctor'
import underConstruction from '../Pages/UnderConstruction'

const Routes = () => {

return (
    <div>
    <Switch>
        <Route path="/write-review" component={WriteReview} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/doctor/:id" component={SingleDoctor} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={underConstruction} />
    </Switch>
    </div>
);
};

export default Routes;
