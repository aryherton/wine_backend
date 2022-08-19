import { connect } from 'mongoose';

import options from '../config';

export default (url: string = 'mongodb+srv://ary:qwe123456789@wine.3eorkec.mongodb.net/?retryWrites=true&w=majority') => connect(url, options);
