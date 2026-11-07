from playwright.sync_api import sync_playwright,expect
from pathlib import Path
import json
BASE='http://127.0.0.1:8080/'
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page(viewport={'width':1440,'height':1000});errors=[];page.on('pageerror',lambda e: errors.append(str(e)))
 def go(slug,file='index.html'):page.goto(BASE+slug+'/'+file);page.wait_for_timeout(350)
 def fill(n,v):page.locator('form [name="'+n+'"]').fill(v)
 def submit():page.locator('form button').first.click()
 go('fashion','register.html');fill('name','Demo User');fill('email','demo@example.test');fill('password','Test12345');fill('confirm','Test12345');submit();expect(page.locator('#status')).to_contain_text('thành công')
 go('fashion','login.html');fill('email','demo@example.test');fill('password','Test12345');submit();expect(page.locator('#account')).to_contain_text('Demo User')
 go('fashion','change-password.html');fill('old','Test12345');fill('password','New12345');fill('confirm','New12345');submit();expect(page.locator('#status')).to_contain_text('Đã đổi')
 go('fashion','products.html');page.locator('#search').fill('linen');expect(page.locator('#catalog .item')).to_have_count(1);page.locator('[data-open]').click();page.locator('[data-add]').click();expect(page.locator('#basket')).to_contain_text('350.000');fill('name','Khach demo');fill('phone','0901234567');fill('address','Dia chi minh hoa');submit();expect(page.locator('#status')).to_contain_text('Đã lưu đơn')
 go('tech','products.html');expect(page.locator('#basket')).to_contain_text('trống')
 go('tours','products.html');page.locator('[data-open]').first.click();fill('name','Khach demo');fill('email','demo@example.test');fill('date','2027-01-12');fill('people','2');page.locator('dialog form button').click();expect(page.locator('#status')).to_contain_text('Đã lưu đặt chỗ')
 go('appointments','products.html');page.locator('[data-open]').first.click();fill('name','Demo');fill('email','demo@example.test');fill('date','2027-01-12');page.locator('dialog form button').click();page.locator('[data-open]').nth(1).click();fill('name','Demo');fill('email','demo@example.test');fill('date','2027-01-12');page.locator('dialog form button').click();expect(page.locator('#dialog-status')).to_contain_text('đã có lịch');page.locator('#close-detail').click()
 go('todo');fill('name','Kiem tra demo');submit();expect(page.locator('#task-list')).to_contain_text('Kiem tra demo');page.locator('[data-task-check]').last.check();page.reload();expect(page.locator('[data-task-check]').last).to_be_checked()
 go('expenses');fill('name','Mua sach');fill('amount','50000');submit();expect(page.locator('#expense-list')).to_contain_text('50.000')
 go('calendar');fill('name','Hop nhom');fill('date',page.evaluate('new Date().toLocaleDateString("en-CA")'));fill('time','14:00');submit();expect(page.locator('#events')).to_contain_text('Hop nhom')
 go('quiz');page.locator('[data-answer="0"]').click();expect(page.locator('#explanation')).to_contain_text('Chính xác');page.locator('#next-question').click();expect(page.locator('#quiz-box')).to_contain_text('Câu 2')
 go('mini-tools');page.locator('#calc-a').fill('7');page.locator('#calc-b').fill('3');page.locator('#calculate').click();expect(page.locator('#calc-result')).to_have_text('10');page.locator('#start-timer').click();page.wait_for_timeout(1100);expect(page.locator('#timer-value')).not_to_have_text('25:00');page.locator('#pause-timer').click()
 go('courses','products.html');page.locator('[data-open]').first.click();page.locator('[data-lesson]').check();page.locator('#close-detail').click();page.reload();page.locator('[data-open]').first.click();expect(page.locator('[data-lesson]')).to_be_checked()
 go('gallery','manage.html');fill('name','Anh ca nhan');fill('price','0');fill('description','Anh thu nghiem tai len');page.locator('form [name="image"]').set_input_files('gallery/images/product-01.jpg');submit();expect(page.locator('#status')).to_contain_text('Đã thêm');go('gallery','products.html');expect(page.locator('#catalog .item')).to_have_count(7)
 go('flowers','feedback.html');fill('name','Demo');fill('message','Giao dien de su dung');submit();expect(page.locator('#status')).to_contain_text('Đã lưu góp ý')
 for slug in ['fashion','tours','todo','courses','dalat']:
  go(slug);page.screenshot(path='scripts/'+slug+'-desktop.png',full_page=True)
 assert not errors,errors
 print('Passed: auth, password, search, cart checkout/isolation, tour booking, duplicate appointment, tasks persistence, expense totals, calendar, quiz, calculator/timer, lesson progress, image upload, feedback.')
 b.close()
