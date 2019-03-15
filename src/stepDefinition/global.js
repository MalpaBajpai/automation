import { Given,Before,After } from 'cucumber';
import Utilities from '../Utilities';


Before(() => {
    Utilities.initDriver();
});

After(() => {
    //Utilities.quitDriver();
});

