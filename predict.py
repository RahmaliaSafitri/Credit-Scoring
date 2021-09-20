import pandas as pd
import numpy as np
import pickle

with open('trained_model/preprocess.pkl', 'rb') as f:
    fe = pickle.load(f)

with open('trained_model/model.pkl', 'rb') as m:
    model = pickle.load(m)

def preprocess_input(input_data):
    input_data.pop("loan_status", None)
    input_data.pop("score_proba", None)
    input_data = pd.DataFrame.from_dict(input_data, orient='index')

    return input_data

def make_predictions(input_data):
    input_data = preprocess_input(input_data).T.replace(
        {
            None : np.nan,
            "null" : np.nan,
            "" : np.nan
        }
    )

    input_data = fe.transform(input_data)
    result = model.predict_proba(input_data)[:,1]

    return result

if __name__ == "__main__":
    result = make_predictions(preprocess_input)
    print(type(result))
    print(result)