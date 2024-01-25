import pandas as pd

# Read the karaoke2024.csv file
karaoke_df = pd.read_csv('karaoke2024.csv')

# Sort the DataFrame based on the SongID column in descending order
karaoke_df_sorted = karaoke_df.sort_values(by='SongID', ascending=False)

# Select the top 10 rows
top_10_rows = karaoke_df_sorted.head(10)

# Save the selected rows to 10mostrecent.csv
top_10_rows.to_csv('10mostrecent.csv', index=False)

