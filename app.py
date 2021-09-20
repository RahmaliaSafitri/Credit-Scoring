from logging import debug
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS # library for handling cross origin resources sharing.
from predict import make_predictions, preprocess_input


def create_app():
    """ app factories """
    app = Flask(__name__)
    CORS(app)


    @app.route("/", methods=["GET"])
    def default():
        return render_template("index.html")


    @app.route('/predict', methods=['POST'])
    def predict():
        if request.method == 'POST':
            data_input = request.get_json()["data"]
            data = {}

            data["person_age"] = data_input.get("age")
            data["person_income"] = data_input.get("income")
            data["person_home_ownership"] = data_input.get("home_ownership")
            data["person_emp_length"] = data_input.get("emplength")
            data["loan_intent"] = data_input.get("loan_intent")
            data["loan_grade"] = data_input.get("loan_grade")
            data["loan_amnt"] = data_input.get("loan_amount")
            data["loan_int_rate"] = data_input.get("interest_rate")
            data["loan_percent_income"] = data_input.get("percent_income")
            data["cb_person_default_on_file"] = data_input.get("historical")
            data["cb_person_cred_hist_length"] = data_input.get("credit_history")


            result = make_predictions(data)
            
            result = {
                "model": "LR",
                "version": "1.0.0",
                "result": result
            }
            
        return jsonify(result)
    return app