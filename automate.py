import time
from selenium import webdriver

def getusername():
    return 'jat.par.rt16@rait.ac.in'

def getpassword():
    return 'dypatil@123'



driver = webdriver.Chrome('./chromedriver')  # Optional argument, if not specified will search path.
driver.get('http://mydy.dypatil.edu/')
time.sleep(5) # Let the user actually see something!
search_box = driver.find_element_by_name('username')
search_box.send_keys(getusername())
driver.find_element_by_id('loginbtn').click()
search_box = driver.find_element_by_name('password')
search_box.send_keys(getpassword())
search_box.submit()
time.sleep(5) # Let the user actually see something!
driver.quit()