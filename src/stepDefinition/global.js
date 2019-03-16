import { Given,Before,After, setDefaultTimeout } from 'cucumber';
import Utilities from '../Utilities';


Before(async() => {
    await Utilities.initDriver();
    //setDefaultTimeout(60000);
});

After(() => {
    Utilities.quitDriver();
});

