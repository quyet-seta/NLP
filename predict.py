# -*- coding: utf-8 -*-
"""
Created on Thu Sep 16 20:27:14 2021

@author: PC
"""
from tensorflow.keras.models import load_model
import tensorflow as tf
import re
from vncorenlp import VnCoreNLP
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import numpy as np

num2label = ['affirm', 'cannot_hear', 'deny', 'describe_symptoms', 'provide_address', 
              'provide_age', 'provide_contact', 'provide_name']

def normalize_sentence(s):
    s = s.lower()
    s = re.sub('-', '', s)
    s = re.sub(',', '', s)
    s = re.sub("\.", '', s)
    s = re.sub('\?','', s)
    s = re.sub('\!','', s)
    s = re.sub('_','', s)
    s = s.strip()
    annotator = VnCoreNLP("VnCoreNLP/VnCoreNLP-1.1.1.jar", annotators="wseg", max_heap_size='-Xmx2g') 
    annotated_text = annotator.annotate(s)
    words = annotator.tokenize(s)[0]
    s = ' '.join(words)  
    return s
          
def padding_sentence(s):
    with open('tokenizer_24h.pickle', 'rb') as handle:
         tokenizer = pickle.load(handle)
    test_sequence = tokenizer.texts_to_sequences([s])
    padded_test_sequences = pad_sequences(test_sequence, maxlen=20, truncating="post", padding="post")
    return padded_test_sequences

class NLPModel:
    def __init__(self, sentence):
        self.sentence = sentence
        self.model = load_model("NLPModel_24h.h5")
    
    def predict(self):
        normal_sentence = normalize_sentence(self.sentence)
        padded_sentence = padding_sentence(normal_sentence)
        prediction = self.model.predict(padded_sentence)
        p = round(np.max(prediction, axis=1)[0],2)
        if p > 0.5:
            label = num2label[np.argmax(prediction, axis = 1)[0]]
        else:
            label = '_'
        return (label, p)
    
if __name__ == "__main__":
   model = NLPModel('- mình bị nóng đầu, ho có đờm, mệt mỏi, ăn không thấy vị gì, đau rát họng, đầu bị đau, không thở được dễ dàng,') 
   (label, p) = model.predict()
           