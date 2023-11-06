export default `SELECT 
teams.team_name AS name,
    SUM(CASE
        WHEN matches.home_team_goals > matches.away_team_goals THEN 3
        WHEN matches.home_team_goals = matches.away_team_goals THEN 1
        ELSE 0
    END) AS totalPoints,
COUNT(*) AS totalGames,
SUM(CASE
  WHEN matches.home_team_goals > matches.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN matches.home_team_goals = matches.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN matches.home_team_goals < matches.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(matches.home_team_goals) AS goalsFavor,
SUM(matches.away_team_goals) AS goalsOwn
FROM teams
JOIN matches ON teams.id = matches.home_team_id
WHERE matches.in_progress = false
GROUP BY teams.team_name
ORDER BY totalPoints DESC, (goalsFavor - goalsOwn) DESC, goalsFavor DESC;`;
