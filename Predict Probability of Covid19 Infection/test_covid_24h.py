# -*- coding: utf-8 -*-
"""
Created on Sat Oct  2 17:08:08 2021

@author: PC
"""

import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
import numpy as np

def get_probability_LR(inputs):
    """
    Parameters
    ----------
    inputs : a 1d numpy array has 9 dimensions

    Returns
    -------
    output: probability of Covid-19 infection

    """
    regression = pickle.load(open('regression.sav', 'rb'))
    p = regression.predict_proba(inputs.reshape(1,9))[0][1]
    return p

def get_probability_SVC(inputs):
    """
    Parameters
    ----------
    inputs : a 1d numpy array has 9 dimensions

    Returns
    -------
    output: probability of Covid-19 infection

    """
    svc = pickle.load(open('svc.sav', 'rb'))
    p = svc.predict_proba(inputs.reshape(1,9))[0][1]
    return p


if __name__ == "__main__":
    inputs = np.array([0,1,1,0,1,1,1,1,1])
    p1 = get_probability_LR(inputs)
    p2 = get_probability_SVC(inputs)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    