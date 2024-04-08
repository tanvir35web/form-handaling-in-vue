<template>
    <div id="container">
        <form>
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
                >
                    <h1>From Handling</h1>
                    <hr />
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            class="form-control"
                            v-model="userData.age"
                        />
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
                >
                    <label for="message">Message</label><br />

                    <textarea
                        id="message"
                        rows="5"
                        class="form-control"
                        v-model="userData.massage"
                    >
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
                >
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                type="checkbox"
                                id="sendmail"
                                value="SendMail"
                                v-model="emailType"
                            />
                            Send Mail
                        </label>
                        <label for="eduMail">
                            <input
                                type="checkbox"
                                id="eduMail"
                                value="EduMail"
                                v-model="emailType"
                            />
                            Send Edu Mail
                        </label>
                        <label for="businessMail">
                            <input
                                type="checkbox"
                                id="businessMail"
                                value="BusinessMail"
                                v-model="emailType"
                            />
                            Send Business Mail
                        </label>
                        <label for="sendInfoMail">
                            <input
                                type="checkbox"
                                id="sendInfoMail"
                                value="SendInfoMail"
                                v-model="emailType"
                            />
                            Send InfoMail
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
                >
                    <label for="male">
                        <input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="gender"
                        />
                        Male
                    </label>
                    <label for="female">
                        <input
                            type="radio"
                            id="female"
                            value="Female"
                            v-model="gender"
                        />
                        Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
                >
                    <label for="priority">Priority</label>
                    <select
                        id="priority"
                        class="form-control"
                        v-model="priority"
                    >
                        <option v-for="priority in priorities" :key="priority">
                            {{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <hr />
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
                >
                    <button class="btn btn-primary" @click.prevent="handleSubmit">
                        Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr />
        <div class="row" v-if="isSubmit">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p>Message: {{ userData.massage }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="email in emailType" :key="email">
                                {{ email }}
                            </li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ priority }}</p>
                        <p>Switched: {{ isSubmit }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                email: "",
                password: "",
                age: "",
                massage: "",
            },
            emailType: [],
            gender: "Male",
            priorities: ["High", "Medium", "Low", "Normal"],
            priority: "Medium",
            isSubmit: false,
        };
    },
    methods: {
        handleSubmit() {
            this.isSubmit = true;
            console.log(this.userData);
        },
    },
};
    
</script>
