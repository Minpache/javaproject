import seaborn as sns
import pandas as pd
import inspect
import numpy as np

titanic = sns.load_dataset("titanic")

missing_df = titanic.isnull()
for col in missing_df.columns:
    missing_count = missing_df[col].value_counts()
    try:
        print(col, ": ", missing_count[True])
    except:
        print(col, ": ", 0)      
titanic.dropna(axis=1, thresh=500, inplace=True)
print(titanic.columns)
#print(inspect.getsource(pd.DataFrame.dropna))
#titanic.dropna(axis=1, subset=['age'], how='any', inplace=True)
age_midian = titanic['age'].median()
titanic['age'].fillna(age_midian, inplace=True)
print(titanic.head(10))